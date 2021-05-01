import React from 'react';
import { FiPlus } from "react-icons/fi";
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple, orange } from '@material-ui/core/colors';





export default function SinglePortfolio(props) {
    const { portfolioImg, title, git, prod  } = props;

    
    
    
    
    return (
        
        <div className="grid">
            <div className="col px-sm-2 mb-3" >
               
                    <div className="portfolio-wrapper">
                        <div className="portfolio-thumb">
                            <h4>{title}</h4>
                            <a href={"https://github.com/Water-my-plant1/front-end"} ><img src={portfolioImg} alt={title} /></a>
                            <a href={git} target="_blank"> <ColorButton target="_blank" variant="body2" variant="outlined"  >GitHub</ColorButton> </a> 
                            <a href={prod} target="_blank"> <ColorButton target="_blank" variant="body2" color="secondary" variant="outlined" color="primary">Production</ColorButton> </a> 

                        </div>
                        
                    </div>
            </div>
        </div>
    )
}

const ColorButton = withStyles((theme) => ({
    root: {
        
      color: theme.palette.getContrastText(orange[500]),
      backgroundColor: orange[500],
      margin: theme.spacing(1),

      '&:hover': {
        backgroundColor: orange[700],
      },
    },
  }))(Button);