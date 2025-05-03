import { NextResponse } from 'next/server';
import educationData from '@/data/education.json';

export async function GET() {
  return NextResponse.json(educationData);
}
