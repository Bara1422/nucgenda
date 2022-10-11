import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const __dirname = dirname(new URL(import.meta.url).pathname);

const contactsLocation = join(__dirname, 'contacts.json');

const saveContacts = (contacts) => writeFileSync(contactsLocation, JSON.stringify(contacts));

const getContacts = () => JSON.parse(readFileSync(contactsLocation));

export { saveContacts, getContacts };