import  { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

type Environment = "production" | "development" | "other";
export function middleware(req: NextRequest, ev: NextFetchEvent) {
    const currentEnv = process.env.NODE_ENV as Environment;
    console.log(currentEnv, "currentEnv");
    console.log(req.nextUrl, "req")

    if (currentEnv === 'production' && 
         req.headers.get("x-forwarded-proto")?.indexOf("https") !== -1) {
        return NextResponse.redirect(
           `https://${req.headers.get('host')}${req.nextUrl.pathname}`,
           301
        );
    } 
    return NextResponse.next();
}