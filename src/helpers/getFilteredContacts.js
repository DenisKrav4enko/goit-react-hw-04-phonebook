export const getFilteredContacts = (contacts, filter) => {
    const filterValue = filter.toLowerCase().trim();
    return contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filterValue)
    })
}