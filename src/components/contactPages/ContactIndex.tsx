import Header from "../layout/Header";
import Footer from "../layout/Footer";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavoriteContact from "./FavoriteContact";
import RemoveContact from "./RemoveContact";
import GeneralContact from "./GeneralContact";
import { FC, useState } from "react";
import { ContactProps } from "../../types/ContactProps";

const ContactIndex: FC = () => {
  const [contactList, setContactList] = useState<ContactProps[]>([
    {
      id: 1,
      name: "Tuomas",
      phone: "235-03-5381",
      email: "example@example.null",
      isFavorite: false,
    },
    {
      id: 2,
      name: "Person",
      phone: "624-90-1241",
      email: "anotherexample@example.null",
      isFavorite: true,
    },
    {
      id: 3,
      name: "Person2",
      phone: "531-55-11155",
      email: "yetanotherexample@example.null",
      isFavorite: true,
    },
  ]);

  return (
    <div className="flex flex-col min-h-screem">
      <Header title="React Contact" />
      <div className="grid grid-cols-2 py-3">
        <AddRandomContact />
        <RemoveContact />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <AddContact />
        <FavoriteContact
          contacts={contactList.filter((contact) => contact.isFavorite)}
        />
        <GeneralContact
          contacts={contactList.filter((contact) => !contact.isFavorite)}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ContactIndex;
