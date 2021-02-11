import React from "react"
import {Card, CardContent, Typography} from "@material-ui/core"
     
const InfoBox = (props) =>{
    return (
        <React.Fragment>
        <Card>
            <CardContent>
                
                <Typography className="infobox" color="textSecondary">{props.title}</Typography>

                <h2 className="infobox__cases">{props.cases}</h2>

                <Typography className="infobox__total">
                {props.total} Total
                </Typography>
            </CardContent>
        </Card>
            
           </React.Fragment>
    )
}
export default InfoBox;
              