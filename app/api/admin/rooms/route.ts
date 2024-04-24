import { allAdminRooms, newRoom } from "@/backend/controllers/roomControllers";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "@/backend/middlewares/auth";

import { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConnect";

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.use(isAuthenticatedUser, authorizeRoles("admin")).get(allAdminRooms);
router.use(isAuthenticatedUser, authorizeRoles("admin")).post(newRoom);

export async function POST(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}

export async function GET(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}
