import type { RequestHandler } from "@sveltejs/kit";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import {resolve} from 'node:path';

export const GET: RequestHandler = async() => {
    const path = resolve('static/EMBL-EBI_cv.pdf');
    const pdf = await readFile(path);

    return new Response(pdf, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline; filename="atharva_tikhe_cv.pdf"'
        }
    })
}