# JS-Frontend-Project

## Stock Performance Heatmap

### Background

The Stock Performance Heatmap tracks the movement of the component stocks in the technology sector which makeup the XLK Sector SPDRs ETFs. It is a graphical representation where the individual values contained in the matrix are represented as colors. Green showing positive change and red showing negative.

### Functionality & MVP  

With this Stock Performance Heatmap, users will be able to:

- [ ] see the rough index weight of different stocks in the sector
- [ ] see the daily percentage change in value of a stock when hovered over
- [ ] get more detail info of the stock when click into one specific stock

In addition, this project will include:

- [ ] A production Readme

### Wireframes

This app will consist of a single screen with the Heatmap, and nav links to the Github, my LinkedIn.

Above the Heatmap, there will be an indication bar showing the indication colors of daily value change of a stock, from deep red to deep green.
In the Heatmap, the spaces for stocks are divided by its market cap in the sector.

![wireframes](https://github.com/klhang/JS-Frontend-Project/blob/master/images/WireFrame%20Screen%20Shot.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Alpha Vantage APIs for daily stock performance data,
- Vanilla JavaScript and `jquery` for overall structure and logic,
- `D3.js` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running.  Create `webpack.config.js` as well as `package.json`.  Learn the basics of `D3.js`.  Goals for the day:

- Discuss with TA to finalize the project plan and figure out the exact technologies involved
- Get a green bundle with `webpack`
- Learn enough `D3.js` to render an object

**Day 2**: Dedicate this day to learning how to connect to Alpha Vantage APIs. Goals for the day:

- Learn enough about the Alpha Vantage APIs
- Having the data from Alpha Vantage rendered in the Heatmap.

**Day 3**: Not Sure

- Having the functional skeleton of the project


**Day 4**: Not Sure

- Seed the project with data from Alpha Vantage APIs


### Bonus features
- [ ] Besides daily performance, users can select the timeframe of the Heatmap to see the weekly, monthly, and annual performance of the stocks.
![wireframes](https://github.com/klhang/JS-Frontend-Project/blob/master/images/Time%20Frames.png)
