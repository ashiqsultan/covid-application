import { ObjectId, Collection, Document } from 'mongodb';
import dbClient from '../dbClient';
import { COUNTRY_COLLECTION_NAME } from '../constants';

export interface ICountry {
  name: string;
  confirmed: number;
  deaths: number;
  recovered: number;
  active: number;
  new_cases: number;
  new_deaths: number;
  new_recovered: number;
  deaths_per_100_cases: number;
  recovered_per_100_cases: number;
  deaths_per_100_recovered: number;
  confirmed_last_week: number;
  one_week_change: number;
  one_week_percent_increase: number;
  who_region: string;
}

export interface ICountryDocument extends ICountry, Document {
  _id?: ObjectId;
}

const CountryCollection = async (): Promise<Collection<ICountryDocument>> => {
  const mongoClient = await dbClient();
  const collection: Collection<ICountryDocument> = mongoClient
    .db()
    .collection(COUNTRY_COLLECTION_NAME);
  return collection;
};

export default CountryCollection;
