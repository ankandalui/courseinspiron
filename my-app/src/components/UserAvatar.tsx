import React from "react";
import { Avatar } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { User } from "next-auth";
import Image from "next/image";

type Props = {
    user: User;
}

const UserAvatar = (props: Props) => {
    const { user } = props;
    return (
        <Avatar>
            {user.image ? (
                <div className="relative w-full h-full aspect-square">
                    <Image src={user.image} alt='user.profile' width={100} height={100} />
                </div>
            ) : (
                <AvatarFallback>
                    <span className="sr-only">{user.name}</span>
                </AvatarFallback>
            )}
        </Avatar>
    );
}

export default UserAvatar;
