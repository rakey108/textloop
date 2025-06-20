import { NextRequest, NextResponse } from 'next/server';
import * as UAParser from 'ua-parser-js';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const parser = new UAParser.UAParser(userAgent);
  const deviceType = parser.getDevice().type;
  // deviceType can be 'mobile', 'tablet', 'smarttv', 'wearable', 'embedded', or undefined (for desktop)
  const isMobile = deviceType === 'mobile' || deviceType === 'tablet';

  const response = NextResponse.next();
  response.headers.set('x-device-mobile', isMobile ? 'true' : 'false');
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
