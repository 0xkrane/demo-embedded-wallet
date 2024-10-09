"use client"

import { useEffect, useState } from "react"
import { useTurnkey } from "@turnkey/sdk-react"
import AppleLogin from "react-apple-login"
import { sha256 } from "viem"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"

import { Skeleton } from "./ui/skeleton"

const AppleAuth = () => {
  const clientId = env.NEXT_PUBLIC_APPLE_OAUTH_CLIENT_ID
  const redirectURI = `${siteConfig.url.base}/oauth-callback`

  const { authIframeClient } = useTurnkey()

  const [nonce, setNonce] = useState<string>("")

  // Generate nonce based on iframePublicKey
  useEffect(() => {
    if (authIframeClient?.iframePublicKey) {
      const hashedPublicKey = sha256(
        authIframeClient.iframePublicKey as `0x${string}`
      ).replace(/^0x/, "")

      setNonce(hashedPublicKey)
    }
  }, [authIframeClient?.iframePublicKey])

  return (
    <>
      {nonce ? (
        <div className="flex w-full justify-center">
          <AppleLogin
            clientId={clientId}
            redirectURI={redirectURI}
            responseType="code id_token"
            nonce={nonce}
            responseMode="fragment"
            designProp={{
              width: 222,
              height: 38,
              border_radius: 12,
            }}
          />
        </div>
      ) : (
        <Skeleton className="h-10 w-full" />
      )}
    </>
  )
}

export default AppleAuth
