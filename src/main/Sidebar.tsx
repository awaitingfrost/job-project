import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Paper, Typography } from '@mui/material';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import { AccountCircleOutlined, ApartmentOutlined, ArticleOutlined, BusinessOutlined, CableOutlined, GroupAddOutlined, MarkUnreadChatAltOutlined, PeopleOutlined, RateReviewOutlined, RecommendOutlined, ScreenSearchDesktopOutlined, TextSnippetOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const useNavigation = () => {

  const links = [
    {
      name: 'Dashboard',
      href: '',
      icon: <AppsOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
    },
    /***************JOBS**************/
    {
      name: 'Jobs',
      headingVal: true,
      dropdown: [
        {
          name: 'All Jobs',
          href: '/all_jobs',
          icon: <AppsOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
        },
        {
          name: 'Featured Jobs',
          href: '/featured_jobs',
          icon: <AppsOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
        },
        {
          name: 'New Jobs',
          href: '/new_jobs',
          icon: <AppsOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
        },
      ],
      icon: <WorkOutlineOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
    },
    {
      name: 'Job Categories',
      href: '/categories',
      icon: <CategoryOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
    },
    {
      name: 'Saved Jobs',
      href: '/saved_jobs',
      icon: <BookmarkBorderOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
    },
    /***************COMPANIES**************/
    {
      name: 'Companies',
      headingVal: true,
      dropdown: [
        {
          name: 'Top Companies',
          href: '',
          icon: <BusinessOutlined sx={{ width: 18, color: "#99a1ab" }} />,
        },
      ],
      icon: <ApartmentOutlined sx={{ width: 18, color: "#99a1ab" }} />,
    },
    {
      name: 'Browse Companies',
      href: '',
      icon: <ScreenSearchDesktopOutlined sx={{ width: 18, color: "#99a1ab" }} />,
    },

    {
      name: 'Company Reviews',
      href: '',
      icon: <RateReviewOutlined sx={{ width: 18, color: "#99a1ab" }} />,
    },
    /***************PROFILE**************/
    {
      name: 'Profile',
      headingVal: true,
      dropdown: [{
        name: 'User Profile',
        href: '',
        icon: <AccountCircleOutlined sx={{ width: 18, color: "#99a1ab" }} />,
      },
      {
        name: 'Resume/CV',
        href: '',
        icon: <ArticleOutlined sx={{ width: 18, color: "#99a1ab" }} />,
      },],
      icon: <ArticleOutlined sx={{ width: 18, color: "#99a1ab" }} />,
    },
    {
      name: 'Job Applications',
      href: '',
      icon: <TextSnippetOutlined sx={{ width: 18, color: "#99a1ab" }} />,
    },
    {
      name: 'Recommended Jobs',
      href: '',
      icon: <RecommendOutlined sx={{ width: 18, color: "#99a1ab" }} />,
    },
    /***************NETWORKING**************/
    {
      name: 'Networking',
      href: '/networks',
      headingVal: true,
      icon: <Diversity1OutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
    },

    {
      name: 'Messages',
      href: '/networks',
      icon: <MarkUnreadChatAltOutlined sx={{ width: 18, color: "#99a1ab" }} />,
    },

    {
      name: 'Group/Communities',
      dropdown: [{
        name: 'Networking Events',
        href: '/networks',
        icon: <PeopleOutlined sx={{ width: 18, color: "#99a1ab" }} />,
      },
      {
        name: 'Connections',
        href: '/networks',
        icon: <CableOutlined sx={{ width: 18, color: "#99a1ab" }} />,
      },
      ],
      icon: <GroupAddOutlined sx={{ width: 18, color: "#99a1ab" }} />,
    },
    /***************RESOURCES**************/
    {
      name: 'Blog/Articles',
      href: '/settings',
      headingVal: true,

      icon: <AppsOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
    },
    {
      name: 'Career Advice',
      href: '/settings',
      icon: <AppsOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
    },
    {
      name: 'Interview Tips',
      href: '/settings',
      icon: <AppsOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
    },
    {
      name: 'Industry Insights',
      href: '/settings',
      icon: <AppsOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
    },
    /***************SETTINGS**************/
    {
      name: 'Settings',
      headingVal: true,
      dropdown: [
        {
          name: 'Account Setting',
          href: '',
          icon: <AppsOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
        },
        {
          name: 'Privacy Settings',
          href: '',
          icon: <AppsOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
        },

      ],
      icon: <AppsOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
    },

    {
      name: 'Notifications',
      href: '',
      icon: <AppsOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
    },
    {
      name: 'Theme Preferences',
      href: '',
      icon: <AppsOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
    },
    /***************HELP AND SUPPORT**************/

    {
      name: 'Help and Support',
      href: '/help_support',
      headingVal: true,
      icon: <AppsOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
    },
    {
      name: 'FAQs',
      href: '/help_support',
      icon: <AppsOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
    },
    {
      name: 'Contact Support',
      href: '/help_support',
      icon: <AppsOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
    },
    {
      name: 'Report and Issue',
      href: '/help_support',
      icon: <AppsOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
    },
    {
      name: 'User Guides',
      href: '/help_support',
      icon: <AppsOutlinedIcon sx={{ width: 18, color: "#99a1ab" }} />,
    },

  ]
  return links;
}

interface DropdownInterface {
  name: string,
  href: string,
  icon: React.ReactElement;
}

interface SidebarLinkInterface {
  name: string;
  href: string;
  headingVal?: boolean,
  dropdown?: DropdownInterface[],
  icon: React.ReactElement;
}

interface DesktopNavbarInterface {
  navigation: SidebarLinkInterface[]
}

const DesktopNavbar: React.FC<DesktopNavbarInterface> = ({ navigation }) => {
  const [openDropdowns, setOpenDropdowns] = React.useState<{ [key: string]: boolean }>({});
  const [selected, setSelected] = React.useState(false);

  const handleClick = (itemName: string) => {
    setOpenDropdowns((prevOpenDropdowns) => ({
      ...prevOpenDropdowns,
      [itemName]: !prevOpenDropdowns[itemName],
    }));
  };

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <Paper sx={{ backgroundColor: '#1d2536', color: "#Ebedf3", maxWidth: 340, maxHeight: "100vh", overflowY: "scroll" }}>
      <List
        sx={{ marginLeft: '2rem', marginRight: '2rem' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {
          navigation?.map((item => (
            < div key={item.name} >
              {
                item.headingVal ? <Typography marginY="1rem" color="#F9F9F9" fontWeight='900'>
                  {item?.name}
                </Typography> : ''
              }
              {item?.dropdown?.length ? '' :
                <ListItemButton
                  sx={{
                    paddingX: '2rem',
                    marginY: '3px',
                    "&:hover": {
                      backgroundColor: '#252e3e'
                    },
                  }}
                >
                  <ListItemIcon style={{ minWidth: '35px' }}>
                    {item?.icon}
                  </ListItemIcon>
                  <Link to={`${item?.href}`}><ListItemText primary={item?.name} /></Link>
                </ListItemButton >}

              {
                item?.dropdown?.length && (
                  <div >
                    <ListItemButton
                      selected={openDropdowns[item.name]}
                      onClick={() => handleClick(item.name)}
                      sx={{
                        paddingLeft: '2rem', "&:hover": {
                          backgroundColor: '#252e3e'
                        },
                      }} >

                      <ListItemIcon sx={{ minWidth: '35px', }}>
                        {item?.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.name} />
                      {openDropdowns[item.name] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    {item.dropdown.map(nestedList => (
                      <div key={nestedList.name}>
                        <Collapse in={openDropdowns[item.name]} timeout="auto" unmountOnExit >
                          <List component="div" disablePadding>
                            <ListItemButton sx={{
                              pl: 5, "&:hover": {
                                backgroundColor: '#252e3e'
                              }
                            }} onClick={handleSelect} >
                              <ListItemIcon>
                                {nestedList?.icon}
                              </ListItemIcon>
                              <Link to={`${nestedList?.href}`}> <ListItemText primary={nestedList.name} /></Link>
                            </ListItemButton>
                          </List>
                        </Collapse>
                      </div>
                    ))
                    }
                  </div>
                )
              }
            </div>
          )))
        }
      </List>
    </Paper >
  )
}


export default function Sidebar() {
  const navigation = useNavigation();
  return (
    <DesktopNavbar navigation={navigation} />
  );
}
