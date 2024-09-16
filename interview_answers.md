# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

- With the use of the context API we can avoid prop drilling. Prop drilling usually is not much of a problem for small apps with a small component tree but as apps get larger and more complex, prop drilling can make data flow really messy. The context API lets us grab data only when the component needs it.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Reducers do the actual logic for updating state in the appropriate ways. Actions serve as the intermediary between the component layer and the data setting layer. This is the point where if any outside data needs to be fetched before setting that data to the store. The store is where all the app level state can be stored. Any component that needs the data stored in the store it can grab it as needed. This is part of the reason the store is called the single source of truth. The second part of that is because the store is meant to be immutable. Meaning it will be changed in a dependable way.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

- redux-thunk lets us pass a function to the reducer rather than an object. This is important because in this function we can do async things like fetch data from an outside API.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

- I think my favorite for this past sprint was Redux because of the power it can have when combined with middleware. It is the most cumbersome though as it has a lot of boiler plate code.
