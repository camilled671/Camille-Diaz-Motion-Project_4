while (true) {
    if (input.rotation(Rotation.Pitch) + input.rotation(Rotation.Roll) > 50) {
        music.siren.playUntilDone()
    } else {
        music.stopAllSounds()
    }
    
}
