from flask.cli import AppGroup
from .users import seed_users, undo_users
from .songs import seed_songs, undo_songs
from .comments import seed_comments, undo_comments
<<<<<<< HEAD
=======
from .likes import seed_likes, undo_likes
>>>>>>> justin
from app.models.db import db, environment, SCHEMA
from .playlist import seed_playlist, undo_playlist
from .playlist_songs import undo_playlist_songs, seed_playlist_songs


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
<<<<<<< HEAD
=======
        undo_playlist_songs()
        undo_playlist()
        undo_likes()
>>>>>>> justin
        undo_comments()
        undo_songs()
        undo_users()

    seed_users()
    seed_songs()
<<<<<<< HEAD
    seed_comments()
=======
    seed_likes()
    seed_comments()
    seed_playlist()
    seed_playlist_songs()

>>>>>>> justin
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
<<<<<<< HEAD
=======

    undo_playlist_songs()
    undo_playlist()
    undo_likes()
>>>>>>> justin
    undo_comments()
    undo_songs()
    undo_users()

    # Add other undo functions here
