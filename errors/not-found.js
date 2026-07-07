/*
This is a custom error class for handling "Not Found" errors in an application.
It extends the built-in Error class and sets a default message and status code for 404 errors.
*/

export class NotFoundError extends Error {
    constructor(message = "Resource not found") {
        super(message);
        this.name = "NotFoundError";
        this.statusCode = 404;
    }
}