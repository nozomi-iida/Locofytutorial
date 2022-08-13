import { FunctionComponent, useState, useCallback } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
  Icon,
  InputAdornment,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import { MatterhornPopup } from "./MatterhornPopup";
import { PortalPopup } from "./PortalPopup";
import { MostPopularDestination } from "./MostPopularDestination";
import styles from "./css/Homepage.module.css";

export const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState<string | null>(null);
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className={styles.homepageDiv}>
          <div className={styles.heroSectionDiv}>
            <header className={styles.topHeader}>
              <div className={styles.topContainerDiv}>
                <button className={styles.fickleflightLogoButton}>
                  <img
                    className={styles.symbolsIcon}
                    alt=""
                    src="symbols.svg"
                  />
                </button>
                <div className={styles.navigationRightDiv}>
                  <div className={styles.navigationMenuDiv}>
                    <button className={styles.exploreButton}>Explore</button>
                    <div
                      className={styles.searchDiv}
                      onClick={onSearchTextClick}
                    >
                      Search
                    </div>
                    <div
                      className={styles.searchDiv}
                      onClick={onHotelsTextClick}
                    >
                      Hotels
                    </div>
                    <button className={styles.offersButton}>Offers</button>
                  </div>
                  <div className={styles.accountSectionDiv}>
                    <img
                      className={styles.hamburgerMenuIcon}
                      alt=""
                      src="notification2.svg"
                    />
                    <img
                      className={styles.notificationBellIcon}
                      alt=""
                      src="notification3.svg"
                    />
                    <img
                      className={styles.profilePictureIcon}
                      alt=""
                      src="top_avatar1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className={styles.searchSectionDiv}>
              <div className={styles.bannerGradientDiv} />
              <img
                className={styles.bannerBackground}
                alt=""
                src="banner--background1@2x.png"
              />
              <div className={styles.searchContainerDiv}>
                <div className={styles.titleDiv}>
                  <div
                    className={styles.letsExploreTravelTheWor}
                  >{`Let’s explore & travel the world`}</div>
                  <div className={styles.findTheBestDestinationsAnd}>
                    Find the best destinations and the most popular stays!
                  </div>
                </div>
                <div className={styles.searchFormDiv}>
                  <div className={styles.formTitleGroup}>
                    <b className={styles.searchFlightsB}>Search flights</b>
                    <div className={styles.flightOptionsDiv}>
                      <div className={styles.flightTypeDiv}>
                        <FormControlLabel
                          className={styles.radioFormControlLabel}
                          label="Return"
                          labelPlacement="end"
                          control={<Radio size="medium" />}
                        />
                        <FormControlLabel
                          className={styles.radioFormControlLabel1}
                          label="One-way"
                          labelPlacement="end"
                          control={
                            <Radio color="primary" checked size="medium" />
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.formInputsRow}>
                    <div className={styles.inputsRowDiv}>
                      <div className={styles.inputGroupDiv}>
                        <Autocomplete
                          className={styles.selectOutlinedAutocomplete}
                          disablePortal
                          options={[
                            "Singapore (SIN)",
                            "Sydney (SYD)",
                            "Siem Reap (REP)",
                            "Shanghai (PVG)",
                            "Sanya (SYX)",
                          ]}
                          renderInput={(params: any) => (
                            <TextField
                              {...params}
                              color="primary"
                              label="Departure"
                              variant="outlined"
                              placeholder=""
                              helperText=""
                            />
                          )}
                          defaultValue="Singapore -  Changi (SIN)"
                          size="medium"
                        />
                      </div>
                      <div className={styles.inputGroupDiv}>
                        <Autocomplete
                          className={styles.selectOutlinedAutocomplete}
                          disablePortal
                          options={[
                            "Norway",
                            "Switzernd",
                            "Italy",
                            "Germany",
                            "Spain",
                          ]}
                          renderInput={(params: any) => (
                            <TextField
                              {...params}
                              color="primary"
                              label="Country of Destinatior"
                              variant="outlined"
                              placeholder="Arrival"
                              helperText=""
                            />
                          )}
                          defaultValue="Los Angeles (LA)"
                          size="medium"
                        />
                      </div>
                      <div className={styles.inputGroupDiv}>
                        <div className={styles.selectOutlinedAutocomplete}>
                          <DatePicker
                            label="Date"
                            value={selectOutlinedDateTimePickerValue}
                            onChange={(newValue: any) => {
                              setSelectOutlinedDateTimePickerValue(newValue);
                            }}
                            renderInput={(params: any) => (
                              <TextField
                                {...params}
                                color="primary"
                                variant="outlined"
                                size="medium"
                                renderInput={{ placeholder: "01/05/2022" }}
                                helperText=""
                                fullWidth
                              />
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.buttonGroupDiv}>
                      <button
                        className={styles.searchFlightsButton}
                        onClick={onSearchFlightsButtonClick}
                      >
                        <div className={styles.buttonDiv}>Search flights</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.homeContentsDiv}>
            <div className={styles.upcomingFlightSection}>
              <b className={styles.upcomingFlightB}>Upcoming Flight</b>
              <div className={styles.flightDetailsDiv}>
                <div className={styles.flightMainContainer}>
                  <div className={styles.toAndFrom}>
                    <div className={styles.fromDetailsDiv}>
                      <b className={styles.sINB}>SIN</b>
                      <div className={styles.singaporeDiv}>Singapore</div>
                    </div>
                    <div className={styles.durationDiv}>
                      <b className={styles.h55MB}>15H 55M</b>
                      <img
                        className={styles.flightIcons}
                        alt=""
                        src="flight-icons.svg"
                      />
                    </div>
                    <div className={styles.toDetailsDiv}>
                      <b className={styles.lAXB}>LAX</b>
                      <div className={styles.losAngelesDiv}>Los Angeles</div>
                    </div>
                  </div>
                  <div className={styles.horizontalLineDiv} />
                  <div className={styles.departureDetailsDiv}>
                    <div className={styles.departsOn1May0800AM}>
                      Departs on: 1 May, 08:00 AM
                    </div>
                    <div className={styles.daysToGo}>
                      <b>4 days</b>
                      <span> to go</span>
                    </div>
                  </div>
                </div>
                <div className={styles.lineSeparatorDiv} />
                <div className={styles.prepareMenuDiv}>
                  <div className={styles.prepareForYourTrip}>
                    Prepare for your trip
                  </div>
                  <div className={styles.tripMenusDiv}>
                    <button
                      className={styles.hotelButton}
                      onClick={onHotelButtonClick}
                    >
                      <img
                        className={styles.hotelIcon}
                        alt=""
                        src="hotel-icon.svg"
                      />
                      <div className={styles.hotelDiv}>Hotel</div>
                    </button>
                    <button className={styles.hotelButton}>
                      <div className={styles.hotelIcon}>
                        <div className={styles.backgroundDiv} />
                        <img
                          className={styles.ticketIcon}
                          alt=""
                          src="ticket.svg"
                        />
                      </div>
                      <div className={styles.attractionsDiv}>Attractions</div>
                    </button>
                    <button className={styles.hotelButton}>
                      <img
                        className={styles.hotelIcon}
                        alt=""
                        src="eats-icon.svg"
                      />
                      <div className={styles.attractionsDiv}>Eats</div>
                    </button>
                    <button className={styles.hotelButton}>
                      <div className={styles.hotelIcon}>
                        <div className={styles.backgroundDiv1} />
                        <img
                          className={styles.trainIcon}
                          alt=""
                          src="vector1.svg"
                        />
                      </div>
                      <div className={styles.attractionsDiv}>Commute</div>
                    </button>
                    <button className={styles.hotelButton}>
                      <div className={styles.taxiIconDiv}>
                        <div className={styles.backgroundDiv2} />
                        <img
                          className={styles.taxiIcon}
                          alt=""
                          src="vector2.svg"
                        />
                      </div>
                      <div className={styles.taxiDiv}>Taxi</div>
                    </button>
                    <button className={styles.hotelButton}>
                      <div className={styles.hotelIcon}>
                        <div className={styles.backgroundDiv3} />
                        <img
                          className={styles.movieIcon}
                          alt=""
                          src="vector3.svg"
                        />
                      </div>
                      <div className={styles.attractionsDiv}>Movies</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.popDestinationsMain}>
              <div className={styles.destinationsTitlesDiv}>
                <div className={styles.titleContainerDiv}>
                  <b className={styles.prepareForYourTrip}>
                    Plan your next trip
                  </b>
                  <b className={styles.mostPopularDestinations}>
                    Most Popular Destinations
                  </b>
                </div>
                <button className={styles.viewAllTop}>
                  <div className={styles.viewAllDestinations}>
                    View all destinations
                  </div>
                  <img
                    className={styles.notificationBellIcon}
                    alt=""
                    src="arrowright.svg"
                  />
                </button>
              </div>
              <div className={styles.cardsContainerDiv}>
                <button className={styles.col1Button}>
                  <div className={styles.parisCardDiv}>
                    <MostPopularDestination />
                    <div className={styles.destinationDetailsDiv}>
                      <b className={styles.parisB}>Paris</b>
                      <div className={styles.detailsDiv}>
                        <div className={styles.div}>$699</div>
                        <div className={styles.fromDiv}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className={styles.col1Button}>
                  <div className={styles.parisCardDiv}>
                    <img
                      className={styles.greeceImageIcon}
                      alt=""
                      src="greeceimage@2x.png"
                    />
                    <div className={styles.destinationDetailsDiv}>
                      <b className={styles.parisB}>Greece</b>
                      <div className={styles.detailsDiv1}>
                        <div className={styles.div1}>$1079</div>
                        <div className={styles.fromDiv1}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className={styles.col1Button}>
                  <div className={styles.parisCardDiv}>
                    <img
                      className={styles.greeceImageIcon}
                      alt=""
                      src="norwayimage@2x.png"
                    />
                    <div className={styles.destinationDetailsDiv}>
                      <b className={styles.parisB}>Norway</b>
                      <div className={styles.detailsDiv}>
                        <div className={styles.div}>$895</div>
                        <div className={styles.fromDiv}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className={styles.col1Button}>
                  <div className={styles.parisCardDiv}>
                    <img
                      className={styles.greeceImageIcon}
                      alt=""
                      src="tuscanyimage@2x.png"
                    />
                    <div className={styles.destinationDetailsDiv}>
                      <b className={styles.parisB}>Tuscany</b>
                      <div className={styles.detailsDiv3}>
                        <div className={styles.div3}>$1245</div>
                        <div className={styles.fromDiv3}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles.viewAllBottom}>
                <div className={styles.viewAllDestinations1}>
                  View all destinations
                </div>
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="arrowright1.svg"
                />
              </div>
            </div>
            <div className={styles.recommendedHolidaysContainer}>
              <div className={styles.recTitleDiv}>
                <b className={styles.recommendedHolidaysB}>
                  Recommended Holidays
                </b>
                <button className={styles.frameButton}>
                  <div className={styles.viewAllHolidays}>
                    View all holidays
                  </div>
                  <img
                    className={styles.notificationBellIcon}
                    alt=""
                    src="arrowright2.svg"
                  />
                </button>
              </div>
              <div className={styles.recCardsContainerDiv}>
                <button className={styles.recCard1}>
                  <img
                    className={styles.unsplash5MV818tzxeoIcon}
                    alt=""
                    src="unsplash5mv818tzxeo1@2x.png"
                  />
                  <div className={styles.holidayDetailsDiv}>
                    <div className={styles.recTitleDiv}>
                      <div className={styles.frameDiv1}>
                        <div className={styles.baliDiv}>Bali</div>
                        <div className={styles.d3NDiv}>4D3N</div>
                      </div>
                      <div className={styles.div4}>$899</div>
                    </div>
                  </div>
                </button>
                <button className={styles.recCard1}>
                  <img
                    className={styles.unsplash5MV818tzxeoIcon}
                    alt=""
                    src="switzerlandimage@2x.png"
                  />
                  <div className={styles.holidayDetailsDiv}>
                    <div className={styles.recTitleDiv}>
                      <div className={styles.frameDiv1}>
                        <div className={styles.baliDiv}>Swiss</div>
                        <div className={styles.d3NDiv}>6D5N</div>
                      </div>
                      <div className={styles.div4}>$900</div>
                    </div>
                  </div>
                </button>
                <button className={styles.recCard3}>
                  <img
                    className={styles.unsplash5MV818tzxeoIcon}
                    alt=""
                    src="boracayimage@2x.png"
                  />
                  <div className={styles.holidayDetailsDiv}>
                    <div className={styles.recTitleDiv}>
                      <div className={styles.frameDiv1}>
                        <div className={styles.baliDiv}>Boracay</div>
                        <div className={styles.d3NDiv}>5D4N</div>
                      </div>
                      <div className={styles.div4}>$699</div>
                    </div>
                  </div>
                </button>
                <button className={styles.recCard4}>
                  <img
                    className={styles.unsplash5MV818tzxeoIcon}
                    alt=""
                    src="palawanimage@2x.png"
                  />
                  <div className={styles.holidayDetailsDiv}>
                    <div className={styles.recTitleDiv}>
                      <div className={styles.frameDiv1}>
                        <div className={styles.baliDiv}>Palawan</div>
                        <div className={styles.d3NDiv}>4D3N</div>
                      </div>
                      <div className={styles.div4}>$789</div>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles.viewAllBottom1}>
                <div className={styles.viewAllHolidays1}>View all holidays</div>
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="arrowright3.svg"
                />
              </div>
            </div>
            <form className={styles.popularStaysForm}>
              <div className={styles.popularStaysHeader}>
                <div className={styles.popularStaysTitle}>
                  <b className={styles.popularStaysB}>Popular Stays</b>
                </div>
                <button
                  className={styles.viewAllStaysButton}
                  onClick={onViewAllStaysButtonClick}
                >
                  <div className={styles.viewAllStays}>View all stays</div>
                  <img
                    className={styles.notificationBellIcon}
                    alt=""
                    src="arrowright2.svg"
                  />
                </button>
              </div>
              <div className={styles.hotelCardsDiv}>
                <div className={styles.hotelCard1}>
                  <div className={styles.hotelCardDiv}>
                    <img
                      className={styles.matterhornSuitesImage}
                      alt=""
                      src="unsplashrlwe8f8anoc2@2x.png"
                    />
                    <div className={styles.stayDetailsDiv}>
                      <div className={styles.stayDetailsRows}>
                        <div className={styles.entireBungalowDiv}>
                          Entire bungalow
                        </div>
                        <b className={styles.matterhornSuitesB}>
                          Matterhorn Suites
                        </b>
                        <div className={styles.nightDiv}>$575/night</div>
                      </div>
                      <img
                        className={styles.videoIcon}
                        alt=""
                        src="video1.svg"
                        onClick={openMatterhornPopup}
                      />
                    </div>
                    <div className={styles.ratingDiv}>
                      <div className={styles.reviewsDiv}>(60 reviews)</div>
                      <div className={styles.groupDiv}>
                        <div className={styles.div8}>4.9</div>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="vector4.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton}>
                      <div className={styles.buttonDiv1}>More details</div>
                    </button>
                  </div>
                </div>
                <div className={styles.hotelCard1}>
                  <div className={styles.hotelCardDiv}>
                    <img
                      className={styles.matterhornSuitesImage}
                      alt=""
                      src="unsplashtsn8bpopveo1@2x.png"
                    />
                    <div className={styles.stayDetailsDiv1}>
                      <div className={styles.stayDetailsRows}>
                        <div className={styles.entireBungalowDiv}>
                          2-Story beachfront suite
                        </div>
                        <b className={styles.matterhornSuitesB}>
                          Discovery Shores
                        </b>
                        <div className={styles.nightDiv}>$360/night</div>
                      </div>
                    </div>
                    <div className={styles.ratingDiv}>
                      <div className={styles.reviewsDiv}>(116 reviews)</div>
                      <div className={styles.groupDiv}>
                        <div className={styles.div8}>4.8</div>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="vector5.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton}>
                      <div className={styles.buttonDiv1}>More details</div>
                    </button>
                  </div>
                </div>
                <div className={styles.hotelCard1}>
                  <div className={styles.hotelCardDiv2}>
                    <img
                      className={styles.matterhornSuitesImage}
                      alt=""
                      src="unsplashrlwe8f8anoc3@2x.png"
                    />
                    <div className={styles.stayDetailsDiv1}>
                      <div className={styles.stayDetailsRows}>
                        <div className={styles.entireBungalowDiv}>
                          Single deluxe hut
                        </div>
                        <b className={styles.arcticHutB}>{`Arctic Hut `}</b>
                        <div className={styles.nightDiv}>$420/night</div>
                      </div>
                    </div>
                    <div className={styles.ratingDiv}>
                      <div className={styles.reviewsDiv2}>(78 reviews)</div>
                      <div className={styles.groupDiv2}>
                        <div className={styles.div10}>4.7</div>
                        <img
                          className={styles.vectorIcon2}
                          alt=""
                          src="vector6.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton}>
                      <div className={styles.buttonDiv1}>More details</div>
                    </button>
                  </div>
                </div>
                <div className={styles.hotelCard4}>
                  <div className={styles.hotelCardDiv3}>
                    <img
                      className={styles.matterhornSuitesImage}
                      alt=""
                      src="unsplashyqrybvxug5q1@2x.png"
                    />
                    <div className={styles.stayDetailsDiv}>
                      <div className={styles.stayDetailsRows}>
                        <div className={styles.entireBungalowDiv}>
                          Deluxe King Room
                        </div>
                        <b className={styles.arcticHutB}>Lake Louise Inn</b>
                        <div className={styles.nightDiv}>$244/night</div>
                      </div>
                      <img
                        className={styles.videoIcon}
                        alt=""
                        src="video2.svg"
                        onClick={openMatterhornPopup1}
                      />
                    </div>
                    <div className={styles.ratingDiv}>
                      <div className={styles.reviewsDiv}>(63 reviews)</div>
                      <div className={styles.groupDiv}>
                        <div className={styles.div8}>4.6</div>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="vector7.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton}>
                      <div className={styles.buttonDiv1}>More details</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.mobileViewAllStays}>
                <div className={styles.viewAllStays1}>View all stays</div>
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="arrowright5.svg"
                />
              </div>
            </form>
          </div>
          <div className={styles.footerSectionDiv}>
            <div className={styles.subscribeSectionDiv}>
              <img
                className={styles.subscribeSectionBackground}
                alt=""
                src="subscribe-section-background@2x.png"
              />
              <div className={styles.shareYourTravelsForm}>
                <div className={styles.formHeaderDiv}>
                  <b className={styles.prepareForYourTrip}>
                    subscribe to our newsletter
                  </b>
                  <b className={styles.formTitleB}>Get weekly updates</b>
                </div>
                <div className={styles.formDiv}>
                  <div className={styles.formTextDiv}>
                    <div className={styles.fillInYourDetailsToJoinT}>
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className={styles.formFieldsDiv}>
                    <div className={styles.formTextDiv}>
                      <TextField
                        className={styles.inputTextField}
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Your name"
                        size="medium"
                        margin="none"
                      />
                    </div>
                    <div className={styles.formTextDiv}>
                      <TextField
                        className={styles.inputTextField}
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Email address"
                        size="medium"
                        margin="none"
                      />
                    </div>
                  </div>
                  <button className={styles.button}>
                    <div className={styles.unstyledButtonDiv}>
                      <div className={styles.buttonDiv5}>submit</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <footer className={styles.footer}>
              <div className={styles.fickleFlightBioDiv}>
                <img className={styles.logoIcon} alt="" src="logo.svg" />
                <div className={styles.fickleFlightIsYourOneStop}>
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img
                  className={styles.socialIcons}
                  alt=""
                  src="social-icons.svg"
                />
              </div>
              <div className={styles.lineDiv} />
              <div className={styles.footerLinksDiv}>
                <div className={styles.companyDiv}>
                  <div className={styles.aboutUsDiv}>About Us</div>
                  <div className={styles.companyDiv1}>Company</div>
                  <div className={styles.newsDiv}>News</div>
                  <div className={styles.careersDiv}>Careers</div>
                  <div className={styles.howWeWork}>How we work</div>
                </div>
                <div className={styles.companyDiv}>
                  <div className={styles.accountDiv}>Account</div>
                  <div className={styles.supportDiv1}>Support</div>
                  <div className={styles.supportCenterDiv}>Support Center</div>
                  <div className={styles.fAQDiv}>FAQ</div>
                  <div className={styles.accessibilityDiv}>Accessibility</div>
                </div>
                <div className={styles.moreDiv}>
                  <div className={styles.covidAdvisoryDiv}>Covid Advisory</div>
                  <div className={styles.moreDiv1}>More</div>
                  <div className={styles.airlineFeesDiv}>Airline Fees</div>
                  <div className={styles.tipsDiv}>Tips</div>
                  <div className={styles.howWeWork}>Quarantine Rules</div>
                </div>
              </div>
            </footer>
          </div>
        </div>
        {isMatterhornPopupOpen && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup}
          >
            <MatterhornPopup onClose={closeMatterhornPopup} />
          </PortalPopup>
        )}
        {isMatterhornPopup1Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup1}
          >
            <MatterhornPopup onClose={closeMatterhornPopup1} />
          </PortalPopup>
        )}
      </>
    </LocalizationProvider>
  );
};
