# Planning
- The project will include a panel that displays the data of a selected movie
    - By default this will display the data of the first movie on the list
- An interactable list of movies will appear beneath this panel, with buttons to move between different items in the list, create items, delete items, and bring up another panel to edit the data of a given movie.
- Aesthetically, some kind of banner and footer might be nice, but given there is a lot of data to display they should be small/unobtrusive enough that all or most of the data can fit on a desktop screen, and not too much scrolling is needed on phone displays.
# Building
- Decided on page colour scheme, logo, typography and created the header.
- Created the main panel that will display the movie data and populated it with the first movie from the movieData object as dummy text.
- Styled the main panel.
- Added control panel.
- Added function to display a movie and an index to track the current position.
- Added function to go to the next movie, or go to the beginning if called at the last item in the list.
- Added function to go to the previous movie, or go to the end if called at the first item in the list.
- Added function to delete currently displayed movie.
- Added tinted div to darken the page beneath the editor form.
- Added editor form and fields.
- Added editor form buttons to close and save.
- Added function to close the form (including clicking outside the form).
# Debugging
- I tried to implement a `<meter>` element for the score, and wasted time fiddling with it. In the end, a simple number looks best.
- Tweaked the appearance of the inside of the display panel a little.
- Fiddled with the CSS class controlling the display of button icons.
- Lots of styling tweaks to get the form to display properly.