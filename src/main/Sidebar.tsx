import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Paper } from '@mui/material';


export default function NestedList() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <Paper sx={{ backgroundColor: '#202434', color: "#Ebedf3", maxWidth: 350, maxHeight: "100vh", overflowY: "scroll" }}>
      <List
        sx={{ marginLeft: '2rem', marginRight: '2rem' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton
          sx={{
            paddingX: '2rem', "&:hover": {
              backgroundColor: 'rgb(7, 177, 77, 0.42)'
            },
          }}
          selected={true}

        >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <SendIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItemButton >


        <ListItemButton sx={{
          paddingX: '2rem', "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
          }
        }}  >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <DraftsIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>

        <ListItemButton onClick={handleClick} sx={{
          paddingLeft: '2rem', "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
          },
        }} >

          <ListItemIcon sx={{ minWidth: '35px', }}>
            <InboxIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="E-commerce" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit >
          <List component="div" disablePadding>
            <ListItemButton sx={{
              pl: 5, "&:hover": {
                backgroundColor: 'rgb(7, 177, 77, 0.42)'
              }
            }} onClick={handleSelect} >
              <ListItemIcon>
                <StarBorder sx={{ width: 18, color: "#99a1ab" }} />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton
          sx={{
            paddingX: '2rem', "&:hover": {
              backgroundColor: 'rgb(7, 177, 77, 0.42)'
            },
          }}
        >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <SendIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItemButton >


        <ListItemButton sx={{
          paddingX: '2rem', "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
          }
        }}  >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <DraftsIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>
        <ListItemButton
          sx={{
            paddingX: '2rem', "&:hover": {
              backgroundColor: 'rgb(7, 177, 77, 0.42)'
            },
          }}
        >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <SendIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItemButton >


        <ListItemButton sx={{
          paddingX: '2rem', "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
          }
        }}  >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <DraftsIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>
        <ListItemButton
          sx={{
            paddingX: '2rem', "&:hover": {
              backgroundColor: 'rgb(7, 177, 77, 0.42)'
            },
          }}
        >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <SendIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItemButton >
        <ListItemButton sx={{
          paddingX: '2rem', "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
          }
        }}  >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <DraftsIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>
        <ListItemButton
          sx={{
            paddingX: '2rem', "&:hover": {
              backgroundColor: 'rgb(7, 177, 77, 0.42)'
            },
          }}
        >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <SendIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItemButton >
        <ListItemButton sx={{
          paddingX: '2rem', "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
          }
        }}  >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <DraftsIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>
        <ListItemButton
          sx={{
            paddingX: '2rem', "&:hover": {
              backgroundColor: 'rgb(7, 177, 77, 0.42)'
            },
          }}
        >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <SendIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItemButton >


        <ListItemButton sx={{
          paddingX: '2rem', "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
          }
        }}  >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <DraftsIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>
        <ListItemButton
          sx={{
            paddingX: '2rem', "&:hover": {
              backgroundColor: 'rgb(7, 177, 77, 0.42)'
            },
          }}
        >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <SendIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItemButton >


        <ListItemButton sx={{
          paddingX: '2rem', "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
          }
        }}  >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <DraftsIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>
        <ListItemButton
          sx={{
            paddingX: '2rem', "&:hover": {
              backgroundColor: 'rgb(7, 177, 77, 0.42)'
            },
          }}
        >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <SendIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItemButton >


        <ListItemButton sx={{
          paddingX: '2rem', "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
          }
        }}  >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <DraftsIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>
        <ListItemButton
          sx={{
            paddingX: '2rem', "&:hover": {
              backgroundColor: 'rgb(7, 177, 77, 0.42)'
            },
          }}
        >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <SendIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItemButton >


        <ListItemButton sx={{
          paddingX: '2rem', "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
          }
        }}  >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <DraftsIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>
        <ListItemButton
          sx={{
            paddingX: '2rem', "&:hover": {
              backgroundColor: 'rgb(7, 177, 77, 0.42)'
            },
          }}
        >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <SendIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItemButton >


        <ListItemButton sx={{
          paddingX: '2rem', "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
          }
        }}  >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <DraftsIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>
        <ListItemButton
          sx={{
            paddingX: '2rem', "&:hover": {
              backgroundColor: 'rgb(7, 177, 77, 0.42)'
            },
          }}
        >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <SendIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItemButton >


        <ListItemButton sx={{
          paddingX: '2rem', "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
          }
        }}  >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <DraftsIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>
        <ListItemButton
          sx={{
            paddingX: '2rem', "&:hover": {
              backgroundColor: 'rgb(7, 177, 77, 0.42)'
            },
          }}
        >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <SendIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItemButton >


        <ListItemButton sx={{
          paddingX: '2rem', "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
          }
        }}  >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <DraftsIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>
        <ListItemButton
          sx={{
            paddingX: '2rem', "&:hover": {
              backgroundColor: 'rgb(7, 177, 77, 0.42)'
            },
          }}
        >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <SendIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItemButton >


        <ListItemButton sx={{
          paddingX: '2rem', "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
          }
        }}  >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <DraftsIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>
        <ListItemButton
          sx={{
            paddingX: '2rem', "&:hover": {
              backgroundColor: 'rgb(7, 177, 77, 0.42)'
            },
          }}
        >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <SendIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItemButton >


        <ListItemButton sx={{
          paddingX: '2rem', "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
          }
        }}  >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <DraftsIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>
        <ListItemButton
          sx={{
            paddingX: '2rem', "&:hover": {
              backgroundColor: 'rgb(7, 177, 77, 0.42)'
            },
          }}
        >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <SendIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItemButton >


        <ListItemButton sx={{
          paddingX: '2rem', "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
          }
        }}  >
          <ListItemIcon style={{ minWidth: '35px' }}>
            <DraftsIcon sx={{ width: 18, color: "#99a1ab" }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>
      </List>
    </Paper>
  );
}
