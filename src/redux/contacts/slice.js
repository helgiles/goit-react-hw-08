import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { selectContacts } from './selectors';
import { selectNameFilter } from '../filter/selectors';

const initialState = {
  items: [],
  loading: false,
  error: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, state => {
        state.loading = false;
        state.error = true;
      }),
});

export const contactsReducer = contactsSlice.reducer;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    console.log('selectFilteredContacts');
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);
