"use client"
import useGetSongById from "@/hooks/useGetSongById"
import useLoadSongURL from "@/hooks/useLoadSongURL"
import usePlayer from "@/hooks/usePlayer"
import PlayerContent from "./PlayerContent"

const Player = () => {
  const player = usePlayer()
  const { song } = useGetSongById(player.activeId)

  const songURL = useLoadSongURL(song!)

  if(!song || !songURL || !player.activeId) {
    return null
  }

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
      <PlayerContent key={songURL} song={song} songUrl={songURL} />
    </div>
  )
}

export default Player
