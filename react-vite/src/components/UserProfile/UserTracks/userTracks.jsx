import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkFetchSongs } from "../../../redux/user";
import './userTracks.css'

const UserTracks = () => {
    const dispatch = useDispatch();
    const songs = useSelector(state => state.users.songs);

    useEffect(() => {
        dispatch(thunkFetchSongs());
    }, [dispatch]);

    return (
        <div className="user-songs-container">
            <h2>User Songs</h2>
            {songs ? (
                <div className="songs-grid">
                    {songs.map(song => (
                        <div key={song.id} className="song-item">
                            <img src="https://placehold.co/400" alt={`Placeholder for ${song.title}`} />
                            <div className="song-details">
                                <div className="song-title">{song.title}</div>
                                <div className="song-artist">by {song.artist}</div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="loading-text">Loading songs...</p>
            )}
        </div>
    );
};

export default UserTracks;
