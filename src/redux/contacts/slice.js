import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'api/contacts';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

const handleFulfilled = state => {
  state.isLoading = false;
};

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () =>
  api.fetchContacts()
);

export const addContact = createAsyncThunk('contacts/addContact', contact =>
  api.addContact(contact)
);

export const deleteContact = createAsyncThunk('contacts/deleteContact', id =>
  api.deleteContact(id)
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(el => el.id !== payload.id);
      })
      .addMatcher(
        action => action.type.endsWith('contacts/pending'),
        handlePending
      )
      .addMatcher(
        action => action.type.endsWith('contacts/rejected'),
        handleRejected
      )
      .addMatcher(
        action => action.type.endsWith('contacts/fulfilled'),
        handleFulfilled
      );
  },
});

export const { addContactAction, removeContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
