import { Request, Response, NextFunction } from 'express';
import AppResponse from '../../types/AppResponse';
import CountryCollection, { ICountry } from '../../models/Country';

const getByCountry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { countryName } = req.params;
    console.log({ countryName });

    // Handle error if countryName is not provided
    if (!countryName) {
      const response: AppResponse = {
        data: null,
        isError: true,
        errMsg: 'Country name is required',
      };

      return res.status(400).json(response);
    }

    const collection = await CountryCollection();
    const countryData: ICountry = await collection.findOne({
      name: countryName,
    });

    // Handle error if country not found
    if (!countryData) {
      const response: AppResponse = {
        data: null,
        isError: true,
        errMsg: 'Country not found',
      };

      return res.status(404).json(response);
    }

    const response: AppResponse = {
      data: countryData,
      isError: false,
    };
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export default getByCountry;
