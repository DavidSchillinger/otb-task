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
- Sorting should only work one field at a time
- Alphabetical sorting should use a basic locale-aware alphanumeric sort
- A fake API request for "fetching" data is acceptable to show basic async code
- Hotel bookings have at least 1 adult guest (simplifies formatting)
- IE11 is not supported (for CSS object-fit and grid), possible to rework to support IE if necessary
