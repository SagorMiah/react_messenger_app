import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const List = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;

  return (
    <>
      <div ref={ref} className={`messagebox ${isUser && "message_user"}`}>
        <Card className={isUser ? "message_userCard" : "message_questCard"}>
          <CardContent>
            <Typography color="white" variant="h5" component="h4">
              {!isUser && `${message.username || "Unknown"}: `}
              {message.message}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
});

export default List;
