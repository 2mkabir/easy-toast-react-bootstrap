
# Easy-Toast-React-Bootstrap

An easy and flexible wrapper for [Toast React Bootstrap](https://react-bootstrap.github.io/docs/components/toasts), enabling you to create toasts from any part of your application with just a few easy steps.


## Installation

```bash
  npm install easy-toast-react-bootstrap
```
or
```bash
  yarn add easy-toast-react-bootstrap
```

## Usage

just 2 steps!

### Step 1: EasyToastContainer

Add the `EasyToastContainer` component as top level as possible.

Example:

```javascript
import {EasyToastContainer} from "easy-toast-react-bootstrap"; // Don't forget to import this

export function App() {
    return (
        <EasyToastContainer position="top-start" className="p-3">
            <App/>
        </EasyToastContainer>
    )
}
```
Optional props of the `EasyToastContainer` exactly like [ToastContainer React Bootstrap](https://react-bootstrap.github.io/docs/components/toasts#toastcontainer).

### Step 2: useEasyToast

the `useEasyToast` returns an array with exactly two values:

`showToast` function: Call it Anywhere you need to show a toast. Give [Toast React-Bootstrap](https://react-bootstrap.github.io/docs/components/toasts#toast) component to the first argument.

`closeToast` function: Call it for close toast in `onClick` prop of `CloseButton`.

Example:
```javascript
import {useEasyToast} from "easy-toast-react-bootstrap";
import {Toast, Stack, CloseButton} from "react-bootstrap";

export function MyComponent() {
    const [showToast, closeToast] = useEasyToast();
    const handleOnClick = () => {
        showToast(
            <Toast
                bg="success"
                autohide
                className="text-white"
            >
                <Stack direction="horizontal" gap={2}>
                    <Toast.Body>My Toast Message!</Toast.Body>
                    <CloseButton className="me-2 m-auto" variant="white" onClick={closeToast}/>
                </Stack>
            </Toast>
        );
    }
    
}
```
Example image:

![Easy Toast React Bootstrap](https://github.com/2mkabir/easy-toast-react-bootstrap/blob/master/easy-toast-react-bootstrap.png?raw=true)



## Additional Options

- `showToast` function has second argument for when multiple toasts exists: default is `"addTop"`. If you want the new toast added from bottom of toasts set it `"addBottom"`.
- You can wrapper [Toast React-Bootstrap](https://react-bootstrap.github.io/docs/components/toasts#toast) component inside your custom component and pass it to `showToast` function.
  Example:

MyComponent.js
```javascript
import {useEasyToast} from "easy-toast-react-bootstrap";

export function MyComponent() {
    const [showToast, closeToast] = useEasyToast();
    const handleOnClick = () => {
        showToast(
            <MyCustomToast
                message="My Toast Message!"
                bg="success"
                onClose={closeToast}
            />
        );
    }
    
}

```
MyCustomToast.js
```javascript
import {CloseButton, Stack, Toast} from "react-bootstrap";

const MyCustomToast = ({message, bg, onClose}) => {
    return (
        <Toast
            bg={bg}
            autohide
            className="text-white"
        >
            <Stack direction="horizontal" gap={2}>
                <Toast.Body>
                    {message}
                </Toast.Body>
                <CloseButton className="me-2 m-auto" variant="white" onClick={onClose}/>
            </Stack>
        </Toast>
    );
};

export default MyCustomToast;

```

- `onClose` prop of [Toast React-Bootstarp](https://react-bootstrap.github.io/docs/components/toasts#toast) component not needed and deactive.
## Contributing

If you would like to see additions/changes to this package you are always welcome to add some code or improve it.

