import { useState } from "react"
import { Form, Input, Label, FormGroup } from "reactstrap"

const About = () => {
    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => {
        return setIsVisible(!isVisible)
    }

    return (
        <div style={{ margin: '5rem' }}>
            <h2>about.</h2>
            <Form>
                <FormGroup switch>
                    <Input
                        type="switch"
                        checked={isVisible}
                        onClick={toggleVisibility}
                    />
                    <Label>
                        {
                            isVisible ? "hide details" : "show details"
                        }
                    </Label>
                </FormGroup>
            </Form>
            {isVisible && <h4>The React Food Ordering App is an engaging project that harnesses the capabilities of React, React Redux, and React Router DOM to create a seamless food ordering experience. This app adopts a frontend-driven approach, eliminating the need for backend functionality. Through responsive design and a component-based structure, users can easily navigate the application on various devices. State management using React Redux ensures a synchronized and dynamic user interface, while React Router DOM facilitates smooth transitions between different sections of the app. The incorporation of mock data simulates a realistic menu, allowing users to interactively add items to their cart, adjust quantities, and view order summaries. This project demonstrates the prowess of frontend technologies in crafting intuitive and feature-rich applications.</h4>}
        </div>
    )
}

export default About