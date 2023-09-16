'use client'

import CreateServerModal from '@/components/models/CreateServerModal'
import { useEffect, useState } from 'react'
import InviteModal from '../models/InviteModal'
import EditServerModal from '../models/EditServerModal'

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
    </>
  )
}