import { NextRequest } from "next/server";
import { checkRoomBookingAvailability } from "@/backend/controllers/bookingControllers";
import { createEdgeRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConnect";

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(checkRoomBookingAvailability);

export async function GET(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}
