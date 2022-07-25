# LaraGigs APP for Sprint

## Description
This is CRUD App to post LaraGigs 
## Launch
1. Install by cloning: type `git clone https://github.com/Eigis26/Laravel_Sprint.git` in `htdocs` folder;
2. Go to mySQL workbench and choose root connection;
3. Create database named `db` (or copy and paste command: `CREATE DATABASE db;`);
4. Open project and launch composer command (if globally: `php composer install`, if localy: `php <path to composer.phar> install`);
5. Create  `.env` file by copying `.env.exampl`e content with command line `cp .env.example .env`;
6. In `.env.` file replace DATABASE=laravel to DATABASE=db';
7. Type in command line `php artisan key:generate` to generate app key.
8. Migrate into database by typing in command line `php artisan:migrate`;
9. Seed some data into database by typing command `php artisand db:seed`;
10. Write into command line `php artisan serve` to start local server;
11. In web browser write `http://127.0.0.1:8000` and push enter
## Author
Eigirdas Anciūnas

