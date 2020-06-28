# Multiple Selector

### Setup

1. Install the dependencies `yarn install`.
2. Start development server `yarn start`, port is `8080`.

### Production Build

`yarn build`

### TODOs

- Add Typescript.
- Include unit tests.
- Show warning when an email is not added to the list because it is invalid.
- Make this more flexible, allow any type of text, and allow the user to specify validation logic.
- Fix styling for the remove icon, it can be hard to reach that icon because the hover only includes the lines.

#### Comments

Initial requirements suggested to add any text to the list. I disregarded that option because there's no point in including a bad email if the user will have to eventually fix it (or maybe we just ignore bad emails when submitting the form?).

Also, allowing editing an email will considerably increase the complexity of this component.

### Suggestions
Display the added emails outside of the "input", when the list gets too big it becomes a problem because there is not enough space, specially for mobile.