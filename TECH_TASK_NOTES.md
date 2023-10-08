## Observations

- Covers:
	- Bootstrapping an application
	- Semantic HTML
	- Modular CSS
	- Testing
- Doesn't explicitly ask for:
	- Complex state management
	- Responsive design
	- Data mutations
	- Error handling
	- HTTP requests
	- Localisation
	- Routing
	- SSR
- Explicitly avoid:
	- Server-side logic

## Assumptions

- Basic responsive styling is acceptable
- Modular CSS refers to JS module scoped styles, e.g. CSS Modules
- Basic CSS is acceptable, alternatively I'd probably suggest Tailwind/Styled Components/Emotion or similar.
- CI/CD configuration is out-of-scope
- Sorting
	- Works only one field at a time
	- Reversing order is impossible (i.e. switch between ascending/descending)
	- Alphabetical is ascending (A-Z)
	- Price sort is descending (most expensive first)
	- Rating sort is descending (highest rating first)
- A fake API request for "fetching" data is acceptable to show basic async code
- Hotel bookings have at least 1 adult guest (simplifies formatting)
- IE11 is not supported (for CSS object-fit, grid and others)
- E2E tests are out-of-scope
	- [An example](https://github.com/DavidSchillinger/brighthr-task/blob/main/cypress/e2e/app.cy.ts) of a tiny bit of
	  Cypress that I wrote for my current employer, if you'd like to see that
