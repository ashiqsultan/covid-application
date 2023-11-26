import { Request, Response, NextFunction } from 'express';
import AppResponse from '../../types/AppResponse';
import CountryCollection, { ICountry } from '../../models/Country';

const getAllDeath = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const collection = await CountryCollection();
    const countries: ICountry[] = await collection
      .find(
        {},
        { projection: { _id: 1, name: 1, deaths: 1 }, sort: { deaths: -1 } }
      )
      .toArray();
    const response: AppResponse = {
      data: countries,
      isError: false,
    };
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export default getAllDeath;
