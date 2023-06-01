import React from "react";
import {
  useSingleChatLogic,
  SingleChatSocket,
  ChatFeed,
  getOrCreateChat,	
} from "react-chat-engine-advanced";

import Header from "@/components/customHeader";
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm";
import Ai from "@/components/customMessageForms/Ai";

const SingleChat = ({ user, secret }) => {
	const chatProps = useSingleChatLogic(
		import.meta.env.VITE_PROJECT_ID,
		user,
		secret
	);

	return (
		<div style={{ flexBasis: "100%" }}>
		  <SingleChatSocket {...chatProps} />
		  <ChatFeed {...chatProps} username={user} />
		</div>
	  );
	};
	
	export default SingleChat;
	
