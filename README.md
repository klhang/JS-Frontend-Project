# Portfolio Heatmap

## Monitor Your Portfolio
[https://fortfolioheatmap.herokuapp.com](https://fortfolioheatmap.herokuapp.com)

The Portfolio Heatmap tracks the movement of the stocks in the User's Portfolio. It is a graphical representation where the individual stocks are contained are represented in different colors and sizes in bubbles, with colors showing positive or negative daily change in market price and size showing relative weight in the user's portfolio.

### Functionality

With this Stock Performance Heatmap, users will be able to:

1.see the rough weight of different stocks in the portfolio by the size of the bubbles
![Home Page](https://github.com/klhang/JS-Frontend-Project/blob/master/Docs/Screen%20Shot%202017-10-06%20at%2010.27.15%20AM.png)

2.see more infos including the sector, the amount invested, and the daily percentage change in value of the stock when hovered over
![More Infos](https://github.com/klhang/JS-Frontend-Project/blob/master/Docs/Screen%20Shot%202017-10-06%20at%2010.28.25%20AM.png)

3.split the stock into different performance groups when get into the Stock By Daily Performance mode
![Split by Performance](https://github.com/klhang/JS-Frontend-Project/blob/master/Docs/Screen%20Shot%202017-10-06%20at%2010.27.33%20AM.png)


### Architecture and Technologies

This project is implemented with:

- Vanilla JavaScript for overall structure and logic
- `D3.js` for DOM manipulation and rendering
- `CSV file` to save data
- `Python simplerHTTPServer` for a light database
