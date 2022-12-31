import { Types } from "mongoose";
import { StatusType } from "../enums/StatusType";

export interface ITodo {
    _id: Types.ObjectId;
    name: string;
    description: string;
    status: StatusType;
    is_deleted: boolean;
  }