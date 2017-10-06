# Portfolio Heatmap

## Monitor Your Portfolio
[https://fortfolioheatmap.herokuapp.com](https://fortfolioheatmap.herokuapp.com)

The Portfolio Heatmap tracks the movement of the stocks in the User's Portfolio. It is a graphical representation where the individual stocks are contained are represented in colors and size in bubbles, with colors showing positive or negative daily change in value and size show relative weight in the portfolio of the user.

### Functionality

With this Stock Performance Heatmap, users will be able to:

1.see the rough weight of different stocks in the users portfolio by the size of the bubbles
![Home Page](https://github.com/klhang/JS-Frontend-Project/blob/master/Docs/Screen%20Shot%202017-10-06%20at%2010.27.15%20AM.png)

2.see more infos including the daily percentage change in value of a stock when hovered over
![More Infos](https://github.com/klhang/JS-Frontend-Project/blob/master/Docs/Screen%20Shot%202017-10-06%20at%2010.28.25%20AM.png)

3.split the stock into groups when click into the Stock By Daily Performance mode.
![Split by Performance](https://github.com/klhang/JS-Frontend-Project/blob/master/Docs/Screen%20Shot%202017-10-06%20at%2010.27.33%20AM.png)


### Architecture and Technologies

This project is implemented with the following technologies:

- Vanilla JavaScript for overall structure and logic
- `D3.js` for DOM manipulation and rendering
- Python simplerHTTPServer for a light database
