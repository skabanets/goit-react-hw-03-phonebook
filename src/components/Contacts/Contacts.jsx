import {
  ContactInfo,
  ContactItem,
  ContactList,
  DeleteContactBtn,
  FilterErrorMessage,
} from './Contacts.styled';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <ContactList>
      {contacts.length !== 0 ? (
        contacts.map(item => (
          <ContactItem key={item.id}>
            <ContactInfo>
              <span>&#128100;</span>
              <span>
                {item.name}: {item.number}
              </span>
            </ContactInfo>
            <DeleteContactBtn type="button" onClick={() => onDelete(item.id)}>
              Delete
            </DeleteContactBtn>
          </ContactItem>
        ))
      ) : (
        <FilterErrorMessage>
          Could not find contacts with this name!
        </FilterErrorMessage>
      )}
    </ContactList>
  );
};
