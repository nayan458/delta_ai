## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Installation

In order to install it you need to have composer installed in you machine. then after you may run the following command to install the project.

`composer install`

It will install all the dependensies requires. Once all the dependencies are installed now you need to migrate the tables.
Please ensure that you have a MySql server running and the .env file is configured as it is in the example.env.
Run the following command to migrate the tables

`php artisan migrate`

However, you may also want to run the following command if you created a database from your own or had some other tables and reset it

`php artisan migrate:fresh`

Now you are ready to start the application. To do so run the folowing command

`php artisan serve`

The application should start at localhost:8000 by default.


