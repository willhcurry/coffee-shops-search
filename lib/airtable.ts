import { AirtableRecordType, CoffeeStoreType } from '@/types';
import { log } from 'console';

var Airtable = require('airtable');
var base = new Airtable({
    apiKey: process.env.AIRTABLE_TOKEN }).base('appzN68tfah9Bi5zz');

const table = base('coffee-stores');

//find record
const getMinifiedRecords = (records: AirtableRecordType[]) => {
    return records.map((record: AirtableRecordType) => {
        return {
            recordId: record.id,
            ...record.fields
        };
    });
}

const findRecordByFilter = async (id: string) => {
    const findRecords = await table
        .select({
            filterByFormula: `id="${id}"`,
        })
        .firstPage();
    
    return getMinifiedRecords(findRecords);

    const allRecords = findRecords.map((record: AirtableRecordType) => {
        return {
            recordId: record.id,
            ...record.fields
        };
    });
};

export const createCoffeeStore = async (coffeeStore: CoffeeStoreType, id: string) => {
    const { name, address, voting = 0, imgUrl } = coffeeStore;
    const records = await findRecordByFilter(id);
    

    if (records.length === 0) {
        //create

        const createRecords = await table.create([{
            fields: {
                id,
                name,
                address,
                voting,
                imgUrl
            }
        }
        ]);

        console.log({ createRecords });
        
        return getMinifiedRecords(createRecords);
    } else {
        //return
        console.log('coffee store exists')
    }
}