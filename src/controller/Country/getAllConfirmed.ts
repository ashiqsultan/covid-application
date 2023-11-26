import { Request, Response, NextFunction } from 'express';
import AppResponse from '../../types/AppResponse';
import CountryCollection, { ICountry } from '../../models/Country';

const getAllConfirmed = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const collection = await CountryCollection();
    const countries: ICountry[] = await collection
      .find(
        {},
        {
          projection: { _id: 1, name: 1, confirmed: 1 },
          sort: { confirmed: -1 },
        }
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

export default getAllConfirmed;
