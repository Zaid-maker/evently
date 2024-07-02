"use server";

import { CreateUserParams } from "@/types";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {}
}
