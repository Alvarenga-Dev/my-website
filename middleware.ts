import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';
import {routing} from './i18n/routing';

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  if (/^\/(en|pt)\/links\/?$/.test(request.nextUrl.pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = '/links';
    return NextResponse.redirect(url);
  }

  if (request.nextUrl.pathname === '/links') {
    const url = request.nextUrl.clone();
    url.pathname = '/pt/links';
    return NextResponse.rewrite(url);
  }

  return handleI18nRouting(request);
}
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/links', '/(en|pt)/:path*']
};
