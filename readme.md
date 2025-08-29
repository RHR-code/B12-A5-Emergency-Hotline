### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

- getElementById returns a single element that has the id name.
- getElementsByClassName returns all the element that has the specified class name.
- querySelector returns the first element that has the specified css selector.
- querySelectorAll returns a node list of all the item that has the specified css selector.

2. How do you **create and insert a new element into the DOM**?

- To create a new element we have to use document.createElement then we have to use appendChild to insert it into a element of dom to show it into the dom.

3. What is **Event Bubbling** and how does it work?

- when we add event to a child and the event goes upward from child to its parents,grandparent up to the roots then it is called Event bubbling. it works by event going from child to its parent and so on.

4. What is **Event Delegation** in JavaScript? Why is it useful?

- instead of using multiple event listeners to the child we can just use event listeners to their parents and by using event.target we can detect which child was clicked and act according to that this is called Event Delegation.It is useful because we can use one event listeners to the parents instead of using multiple.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

- preventDefault() stops the default behavior of the event.The default behavior of a form is that it's submitted the page will reload but if we use preventDefault() then it stop doing that.
- StopPropagation() is used to stop the event from going upward or downward that means stopping the event bubble or the capturing phase.

---
