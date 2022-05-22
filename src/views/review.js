import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import ReviewS1 from "../components/review-s1";
import ReviewS2 from "../components/review-s2";

class Review extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <ReviewS1/>
                <ReviewS2/>
            </Container>    
        );
    }
}

export default Review;