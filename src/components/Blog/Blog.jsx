import "./Blog.css"
// import {BlogNavbar} from "./BlogNavbar";
import {Footer} from "./Footer";

export const Blog = ()=>{
    return (
        <>
        {/* <BlogNavbar/> */}
        
            {/* <div className="headBG">hi
            </div> */}
            <div className="head">
                <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61f32892d1923c5b3b20e40a_BHM2022_HERO_BLOGHDR_1800x720-p-1600.png" />
            </div>
            <div className="tagline">
                <a className="anc" href="">COMMUNITY</a>
                <h1 className="h1" ><a href="">A FOCUS ON BLACK JOY DURING BLACK HISTORY MONTH</a></h1>
            </div>
            <div className="cards">
                <div>
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61fc38b519cf1b6213676d5d_202201002_COM_DataScienceBlog_1800x720-p-800.png" />
                    <a className="anc" href="">ENGINEERING & DESIGN</a>
                    <h1 className="h1" ><a href="">How Data Science Informs Strategy & Innovation at Discord</a></h1>
                </div>
                <br />
                <div className="cardblog">
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61f334952f2c7f6a86199a87_P1PlaystationStatic_Blog%20Header-p-800.png" />
                    <a className="anc" href="">PRODUCT & FEATURES</a>
                    <h1 className="h1" ><a href="">PlayStation x Discord: Connect Your Account and Show What You're Playing</a></h1>
                </div>
            </div>
            {/* second row starts */}
            <div className="cards">
                <div>
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61f970a095f47a8204c974e1_202201009_LEG_SaferInternetDay_Blog_1800x720-p-500.png" />
                    <a className="anc" href="">POLICY & SAFETY</a>
                    <h1 className="h1" ><a href="">Parents & Educators, join us on Discord</a></h1>
                </div>
                <br />
                <div className="cardblog">
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61d489c7cf5045d16b6627e4_Snowsgiving%20Adjusted-p-500.png" />
                    <a className="anc" href="">COMMUNITY</a>
                    <h1 className="h1" ><a href="">Snowsgiving 2021 Has Ended- See How You Made It Truly Special</a></h1>
                </div>
                <div className="cardblog">
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61d6361c3eca8e9f65080e83_image2-p-500.png" />
                    <a className="anc" href="">DISCORD HQ</a>
                    <h1 className="h1" ><a href="">Sourcery at Discord: The Team Who Finds Discord Employyes</a></h1>
                </div>
            </div>
            {/* third row starts */}
            <div className="cards">
                <div>
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61b3c456099a1f404a596891_Design_Buddies_and_Discord_Blog_Header-p-500.png" />
                    <a className="anc" href="">COMMUNITY</a>
                    <h1 className="h1" ><a href="">Make Your Discord Profile Shine: Profile Pointers from Design Pros</a></h1>
                </div>
                <br />
                <div className="cardblog">
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61b78e32a759966e0d836734_coo_blogheader-p-500.jpeg" />
                    <a className="anc" href="">DISCORD HQ</a>
                    <h1 className="h1" ><a href="">Discord Welcome Elizabeth Hamren as new COO</a></h1>
                </div>
                <div className="cardblog">
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/616876e96507aa5597503b2f_Merch%20Blog%20Header-p-500.png" />
                    <a className="anc" href="">DISCORD HQ</a>
                    <h1 className="h1" ><a href="">Introducing @everyone and @here Discord Merch- New Store Swag</a></h1>
                </div>
            </div>
            {/* row ends */}
            <div className="collection">
                <div className="leftimg">
                    <h3>COLLECTION</h3>
                    <h1>PRODUCTS & FEATURES</h1>
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/618c0dc52090ef641192f0ae_Spot-Product%26Features.svg" />
                    <h3 className="tut">Announcements, new features, and general info about the Discord app.</h3>

                    <button>View Collection</button>
                </div>
                <div className="rightimg">
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61fc3af219cf1b4ce968fed4_Communities%20Header-p-800.png" />
                    <h1>Testing 1-2-3:A Note on Upcoming Community Experiments</h1>
                </div>
                <div className="cards1">
                    <div>
                        <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61f334952f2c7f6a86199a87_P1PlaystationStatic_Blog%20Header-p-500.png" />

                        <h3 className="h3" ><a href="">PlayStation x Discord: Connect Your Account and Show What You're Playing</a></h3>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61ae5d8cc6b66360dd9a46d8_gJLNp2js-p-500.png" />

                        <h3 className="h3" ><a href="">Building Sustainable Creator Communities on Discord</a></h3>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/619bd45f7ba2bf5b4e115d6f_Nitro_Holiday_BlogHeader_21Nov-p-500.png" />
                        <h3 className="h3" ><a href="">Get a Month of Free Nitro When You Subscribe During Our Holiday Promo</a></h3>
                    </div>
                </div>
            </div>
            {/* first div end */}
            <div className="collection">
                <div className="leftimg">
                    <h3>COLLECTION</h3>
                    <h1>COMMUNITY</h1>
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61d391f4df37f3002e7f2fd7_Spot-Community-FIX.svg" />
                    <h3 className="tut">Stories, spotlights, and behind the scenes from the heart and soul of Discord:the community.</h3>

                    <button>View Collection</button>
                </div>
                <div className="rightimg">
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61f32892d1923c5b3b20e40a_BHM2022_HERO_BLOGHDR_1800x720-p-800.png" />
                    <h1>A Focus on Black Joy During Black History Month</h1>
                </div>
                <div className="cards1">
                    <div>
                        <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61d489c7cf5045d16b6627e4_Snowsgiving%20Adjusted-p-500.png" />

                        <h3 className="h3" ><a href="">Snowsgiving 2021 Has Ended- See How You Made It Truly Special</a></h3>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61b3c456099a1f404a596891_Design_Buddies_and_Discord_Blog_Header-p-500.png" />

                        <h3 className="h3" ><a href="">Make Your Discord Profile Shine: Profile Pointers from Design Pros</a></h3>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/611ea0c9ec23bb37c03bda77_202107017_COM_BTSBlogSocialNewsletter_002_BlogHdr_2500x1000.png" />
                        <h3 className="h3" ><a href="">Eight Educational Communities To Further Your Field of Study</a></h3>
                    </div>
                </div>
            </div>
            {/* second div end */}
            <div className="collection">
                <div className="leftimg">
                    <h3>COLLECTION</h3>
                    <h1>RESOURCES & EDUCATION</h1>
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/618c0dbe5d5979723b723529_Spot-Resources%26Education.svg" />
                    <h3 className="tut">Tutorials and guides to help with Discord and other topics of interest</h3>

                    <button>View Collection</button>
                </div>
                <div className="rightimg">
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61f2eb202125983477455f6e_Discord-2FA-Blog-Header-p-800.png" />
                    <h1>How 2-Factor Authentication Helps Keep Your Discord Account Safe</h1>
                </div>
                <div className="cards1">
                    <div>
                        <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/6151fd90e95bbb79b7539da4_image1-p-500.png" />

                        <h3 className="h3" ><a href="">Discussing Latinx Heritage Month with Discord's Latinx ERG: La Cafeteria</a></h3>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/6131482b5001265f5383dc86_1_uaUzT2JWTEQmxUaRGUVArA-p-500.png" />

                        <h3 className="h3" ><a href="">Ten Tips to Help Your College Club Bloom on Discord</a></h3>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/610da65e5465d4ed3209ef70_0_ejLLXjANErsMjwDv-p-500.png" />
                        <h3 className="h3" ><a href="">Resources for Celebrating Pride Throughout The Year</a></h3>
                    </div>
                </div>
            </div>
            {/* third div end */}
            <div className="collection">
                <div className="leftimg">
                    <h3>COLLECTION</h3>
                    <h1>DISCORD HQ</h1>
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/618c0dcf1353ad3f0af85e59_Spot-HQ.svg" />
                    <h3 className="tut">General company updates about what Discord is up to at HQ</h3>

                    <button>View Collection</button>
                </div>
                <div className="rightimg">
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61d6361c3eca8e9f65080e83_image2-p-800.png" />
                    <h1>Sourcery at Discord: The Team Who Finds New Discord Employees</h1>
                </div>
                <div className="cards1">
                    <div>
                        <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61b78e32a759966e0d836734_coo_blogheader-p-500.jpeg" />

                        <h3 className="h3" ><a href="">Discord Welcomes Elizabeth Hamren as new COO</a></h3>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/616876e96507aa5597503b2f_Merch%20Blog%20Header-p-500.png" />

                        <h3 className="h3" ><a href="">Introducing @everyone and @here Discord Merch - New Store Swag</a></h3>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61539a435cfc8e11cefccaea_image6-p-500.png" />
                        <h3 className="h3" ><a href="">How the Cord Club Interns Made Their Mark on Discord</a></h3>
                    </div>
                </div>
            </div>
            {/* forth div end */}
            <div className="collection">
                <div className="leftimg">
                    <h3>COLLECTION</h3>
                    <h1>ENGINEERING & DESIGN</h1>
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/618c0d96d3023b5fba35efbf_Spot-Engineering%26Design.svg" />
                    <h3 className="tut">in-depth analysis and thought process on engineering and design challenges.</h3>

                    <button>View Collection</button>
                </div>
                <div className="rightimg">
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61fc38b519cf1b6213676d5d_202201002_COM_DataScienceBlog_1800x720-p-800.png" />
                    <h1>How Data Science Informs Strategy & Innovation at Discord</h1>
                </div>
                <div className="cards1">
                    <div>
                        <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61aa7642a72a1b627d695f49_Discord-Elixir-Blog-Header-p-500.png" />

                        <h3 className="h3" ><a href="">Why and How Discord Uses Patch to Test Elixir</a></h3>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/619575c462b70073305c7cbb_Engineering-Blog-Header-Updated-p-500.png" />

                        <h3 className="h3" ><a href="">How Discord Creates Insights from Trillions of Data Points</a></h3>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/611ea52f24129763b2e5eee5_1_6soUZv1WHyekDqTmSAuM_g-p-500.png" />
                        <h3 className="h3" ><a href="">Building open-source design tools to improve Discord's design workflow</a></h3>
                    </div>
                </div>
            </div>
            {/* fifth div end */}
            <div className="collection">
                <div className="leftimg">
                    <h3>COLLECTION</h3>
                    <h1>POLICY & SAFETY</h1>
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/618c0d8ea6fb53d41950d8d1_Spot-Policy%26Safety.svg" />
                    <h3 className="tut">General tips and insights from Discord's Trust & Safety team who tackle safety issues on the platform.</h3>

                    <button>View Collection</button>
                </div>
                <div className="rightimg">
                    <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61fae23a25914c89938a7d2f_image3-p-500.png" />
                    <h1>Protecting Against Scams on Discord</h1>
                </div>
                <div className="cards1">
                    <div>
                        <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/618db6b2cf98f2d9aa324a53_image5-p-500.png" />

                        <h3 className="h3" ><a href="">Scams and What to Look Out For</a></h3>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61f970a095f47a8204c974e1_202201009_LEG_SaferInternetDay_Blog_1800x720-p-500.png" />

                        <h3 className="h3" ><a href="">Parents & Educators, join us on Discord</a></h3>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/618db6b2cf98f2d9aa324a53_image5-p-500.png" />
                        <h3 className="h3" ><a href="">How We're Fighting Spammers on Discord</a></h3>
                    </div>
                </div>
            </div>
            {/* sixth div end */}
            <Footer/>
        </>
    )
}

