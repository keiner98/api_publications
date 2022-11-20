import { Request, Response } from "express";
import Publications from "../models/Publications";

export default class PublicationsController {
  constructor() {}

  public async getPublications(req: Request, res: Response) {
    const publications = await Publications.find().sort( { 'timestamp': -1 });
    try {
      res.status(201).json({ data: publications });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async createPublication(req: Request, res: Response) {
    try {
      const publication = new Publications({ ...req.body });
      await publication.save();
      res.status(201).json({ data: publication });
    } catch (error: any) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  }
}
