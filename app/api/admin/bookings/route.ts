import {
  authorizeRoles,
  isAuthenticatedUser,
} from "@/backend/middlewares/auth";

import { NextRequest, NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { getAllAdminBookings } from "@/backend/controllers/bookingControllers";

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router
  .use(isAuthenticatedUser, authorizeRoles("admin"))
  .get(getAllAdminBookings);

export async function GET(
  request: NextRequest,
  ctx: RequestContext
): Promise<NextResponse> {
  return router.run(request, ctx) as Promise<NextResponse>;
}
