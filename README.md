# Top-Shelf

Top-Shelf is a React and Redux application with a Rails API on the backend. It gives users the ability to see the NYT Bestseller books from the Fiction, Nonfiction, and Science genres. It then allows users to add or remove books from their Book List, see reviews from NYT (where applicable) or Amazon users (for all others), and add/edit comments for books on their Book List.

## Getting Started

To use Top-Shelf, clone this repo, and install the required gems for the backend API:
```
bundle install
```
Next, migrate the database:
```
rake db:migrate
```
Then, install dependencies on the frontend:
```
npm install
```
Start the rails server:
```
rails s
```
In a new terminal window, start a new server
```
npm start
```
Start adding and reading books!

## Contributing
Bug reports and pull requests are welcome on [GitHub](https://github.com/Brycew30/top-shelf). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://www.contributor-covenant.org/). Please read [CONTRIBUTING.md](https://github.com/Brycew30/top-shelf/blob/main/CONTRIBUTING.md) for details.

## License
This project is licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Additional Information
This is my fifth portfolio project for Flatiron School's Software Engineering program.
