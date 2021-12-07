import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {StatusPropsType} from "../ProfileContainer";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props: StatusPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.groopOfNameAndStatus}>
                    <div>
                        {props.profile.fullName}
                    </div>
                    <div className={s.status}>
                        <ProfileStatus profile={props.profile} status={props.status}
                                       updateStatus={props.updateStatus}/>
                    </div>
                </div>
                <div className={s.Photo}>
                    <div>
                        <img src={props.profile.photos.small}/>
                    </div>
                </div>
                <div className={s.blockInfoUser}>
                    <div><b>About me: </b> {props.profile.aboutMe}</div>
                    <div><b>Job Description: </b> {props.profile.lookingForAJobDescription}</div>
                    <div><b>lookingForAJob: </b> {props.profile.lookingForAJob ? "yes" : "no"}</div>
                    <ul style={{margin: 10, padding: 5}}><b>Contacts</b>:
                        <li><b>github: </b> <a
                            href={props.profile.contacts.github}><i>{props.profile.contacts.github || ""}</i></a>
                        </li>
                        <li><b>vk: </b> <a
                            href={props.profile.contacts.vk}><i>{props.profile.contacts.vk || ""}</i></a>
                        </li>
                        <li><b>facebook: </b> <a
                            href={props.profile.contacts.facebook}><i>{props.profile.contacts.facebook || ""}</i></a>
                        </li>
                        <li><b>instagram: </b> <a
                            href={props.profile.contacts.instagram}><i>{props.profile.contacts.instagram || ""}</i></a>
                        </li>
                        <li><b>twitter: </b> <a
                            href={props.profile.contacts.twitter}><i>{props.profile.contacts.twitter || ""}</i></a>
                        </li>
                        <li><b>website: </b> <a
                            href={props.profile.contacts.website}><i>{props.profile.contacts.website || ""}</i></a>
                        </li>
                        <li><b>youtube: </b> <a
                            href={props.profile.contacts.youtube}><i>{props.profile.contacts.youtube || ""}</i></a>
                        </li>
                        <li><b>mainLink: </b> <a
                            href={props.profile.contacts.mainLink}><i>{props.profile.contacts.mainLink || ""}</i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;